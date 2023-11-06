const { User, Item, Ingredients, Category, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const { createToken } = require("../helper/jwt");

class AdminController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "Email/password is required" };
      }
      const findEmail = await User.findOne({
        where: { email },
      });
      if (!findEmail) {
        throw { name: "Email/password is invalid" };
      }
      const isValidPassword = bcrypt.compareSync(password, findEmail.password);
      if (!isValidPassword) {
        throw { name: "Email/password is invalid" };
      }

      const payload = {
        id: findEmail.id,
        email: findEmail.email,
      };

      const access_token = createToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async items(req, res, next) {
    try {
      const data = await Item.findAll({
        order: [["id", "ASC"]],
        include: [
          { model: Ingredients, order: [["id", "ASC"]] },
          { model: Category },
          { model: User, attributes: ["id", "username", "email"] },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const authorId = +req.user.id;

      let { name, description, price, imgUrl, categoryId, ingredients } =
        req.body;

      const newItem = await Item.create(
        {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
        },
        { transaction: t }
      );

      ingredients = ingredients.map((item) => {
        item.itemId = newItem.id;
        return item;
      });

      const newIngredients = await Ingredients.bulkCreate(ingredients, {
        transaction: t,
      });

      await t.commit();
      res.status(201).json({ item: newItem, ingredients: newIngredients });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async edit(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { authorId } = +req.params;
      let { id, name, description, price, imgUrl, categoryId, ingredients } =
        req.body;
      await Item.update(
        {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
        },
        {
          where: { id },
          transaction: t,
        }
      );

      ingredients = ingredients.map((el) => {
        return { itemId: id, name: el.name };
      });

      await Ingredients.bulkCreate(ingredients, {
        updateOnDuplicate: ["itemId", "name"],
        transaction: t,
      });

      t.commit();

      res.status(200).json("Update Success");
    } catch (error) {
      t.rollback();
      next(error);
    }
  }

  static async itemById(req, res, next) {
    try {
      const { id } = req.params;
      const findItem = await Item.findByPk(id);
      if (!findItem) {
        throw { name: "Data not found" };
      }
      res.status(200).json(findItem);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.body;
      const findItem = await Item.findByPk(id);
      if (!findItem) {
        throw { name: "Data not found" };
      }
      await Item.destroy({
        where: { id },
      });
      res.status(200).json({ id: findItem.id, name: findItem.name });
    } catch (error) {
      next(error);
    }
  }

  static async categories(req, res, next) {
    try {
      const data = await Category.findAll({
        order: [["id", "ASC"]],
      });
      if (!data) {
        throw { name: "Data not found" };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategories(req, res, next) {
    try {
      const { id } = req.body;
      const findCategory = await Category.findByPk(id);
      if (!findCategory) {
        throw { name: "Data not found" };
      }
      await Category.destroy({
        where: { id },
      });
      res.status(200).json({ name: findCategory.name });
    } catch (error) {
      next(error);
    }
  }

  static async createCategories(req, res, next){
    try {
      const { name } = req.body
      const response = await Category.create({name})
      res.status(201).json(response)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = AdminController;
