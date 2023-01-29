const express = require('express');

const noticesCtrl = require("../../controllers/notices");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");
const {noticeSchema} = require('../../schemas')


const router = express.Router()
//створити ендпоінт для отримання оголошень по категоріям
router.get("/:category")
//створити ендпоінт для отримання одного оголошення
router.get("/:noticeId")
//створити ендпоінт для додавання оголошення до обраних
router.post("/favorites/:noticeId")
//створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
router.get('/favorites')
//створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
router.delete('/favorites/:noticeId')
//створити ендпоінт для додавання оголошень відповідно до обраної категорії
router.post('/:category')
//створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get('/')
//створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем 
router.delete('/:noticeId')


// router.get('/', ctrlWrapper(ctrl.listContacts))

// router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getContactById))

// router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact))

// router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.removeContact))

// router.put('/:contactId', isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact))

// router.patch('/:contactId/favorite', isValidId, validateBody(schemas.updateSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router
