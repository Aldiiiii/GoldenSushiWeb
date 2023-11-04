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
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  // nanti dilanjut
  //   static async add(req, res, next) {
  //     // const t = await sequelize.transaction();
  //     try {
  //     //   console.log(req.body);
  //     //   const test = JSON.parse(req.body.ingredientsName);
  //     //   console.log(test, `<<<<<>>>>>>>`);
  //       const authorId = +req.user.id;
  //       let {
  //         itemName,
  //         description,
  //         price,
  //         imgUrl,
  //         categoryId,
  //         ingredientsName,
  //       } = req.body;
  //       //   const newItem = await Item.create(
  //       //     {
  //       //       name: itemName,
  //       //       description,
  //       //       price,
  //       //       imgUrl,
  //       //       authorId,
  //       //       categoryId,
  //       //     },
  //       //     { transaction: t }
  //       //   );
  //       console.log(ingredientsName,`<<<<<<<<<<<<<<<<<`)
  //       const newIngredients = await sequelize.bulkInsert(
  //         "Ingredients",
  //         ingredientsName,
  //         {}
  //       );
  //       console.log(newIngredients);
  //       //   await t.commit();
  //       res.status(201).json({ item: newItem, ingredients: newIngredients });
  //     } catch (error) {
  //         console.log(error);
  //     //   await t.rollback();
  //       next(error);
  //     }
  //   }

  static async edit(req, res, next) {
    try {
      const { id } = +req.params;
      const { name, description, price, imgUrl, authorId, categoryId } = req.body;

      const update = await Item.update(
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
        }
      );

      res.status(200).json(update);
    } catch (error) {
      next(error);
    }
  }

  static async itemById(req, res, next) {
    try {
        const {id} = req.params
        const findItem = await Item.findByPk(id)
        if(!findItem){
            throw {name: "Data not found"}
        }
        res.status(200).json(findItem)
    } catch (error) {
        next(error)
    }
  }

  static async delete(req, res, next) {
    try {
        const { id } = req.params
        const findItem = await Item.findByPk(id)
        if(!findItem){
            throw {name: "Data not found"}
        }
        await Item.destroy({
            where: {id}
        })
        res.status(200).json({id: findItem.id, name: findItem.name})
    } catch (error) {
        next(error)
    }
  }

  // Categories
  static async categories(req, res, next){
    try {
      const data = await Category.findAll({
        order: [['id', 'ASC']]
      })
      if(!data){
        throw {name: "Data not found"}
      }
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = AdminController;
