const {itemCreated} = require('./items.model')
const {handleHttpError} = require('../../utils/handleError')
const {ref, uploadBytes, getDownloadURL} = require('firebase/storage');
const { storage } = require('../../utils/firebase');

const createItem = async (req, res) => {
    try {
        const {name, price, description} = req.body

        let imgItem;

        if(!req.file){
            imgItem = 'default.png'
        }else{
            imgItem = req.file.originalname

            const imgFilename = ref(storage, `${Date.now()}_img_${imgItem}`)
            
            const imgUpload= await uploadBytes(imgFilename, req.file.buffer)

            const imgFirebase = ref(storage, imgUpload.metadata.name)

            const imgDownload = await getDownloadURL(imgFirebase)
            
            imgItem = imgDownload
        }
        

        const item = new itemCreated({
            name,
            price,
            description,
            image: imgItem
        })

        await item.save()

        res.status(200).json({
            message: 'Item created',
            item,
        })
        


    } catch (error) {
        // handleHttpError(res,'ERROR_CREATE_ITEM', 500)
        res.json(error.message)
    }
}

const getAllItems = async (req, res) => {
    try {
        const getItems = await itemCreated.find()

        res.status(200).json(
            getItems
        )
        
    } catch (error) {
        handleHttpError(res,'ERROR_GET_ITEMS', 500)
    }
}

const getItems = async(req,res) =>{
    try {
        const {id} = req.params

        const getId = await itemCreated.findById({
            _id: id
        })

        if(!getId){
            return res.status(404).json({
                message: 'Item not found'
              })
        }

        res.status(200).json({
            message: 'Item found',
            getId
          })
        
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM', 500)
    }
}

const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const {name, price, description} = req.body


        let imgItem;

        if(!req.file){
            imgItem = 'default.png'
        }else{
            imgItem = req.file.originalname

            const imgFilename = ref(storage, `${Date.now()}_img_${imgItem}`)
            
            const imgUpload= await uploadBytes(imgFilename, req.file.buffer)

            const imgFirebase = ref(storage, imgUpload.metadata.name)

            const imgDownload = await getUrl(imgFirebase)
            
            imgItem = imgDownload
        }

        const item = await itemCreated.findByIdAndUpdate(
            id,
            {name, price, description, image: imgItem}
        )

        if(!item){
            handleHttpError(res,'ITEM_NOT_FOUND')
        }

        await item.save()

        res.status(200).json({
            message: 'Item updated',
            newdata: {name, price, description, image:imgItem},
            item
        })

    } catch (error) {
        // handleHttpError(res,'ERROR_UPDATE_ITEM', 500)
        res.json(error.message)

    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.params

        const item = await itemCreated.findByIdAndDelete(id)

        if(!item){
            handleHttpError(res,'ITEM_NOT_FOUND')
        }

        res.status(200).json({
            message: 'Item deleted',
            id
        })

    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_ITEM', 500)
    }
}


module.exports = {createItem, getAllItems, getItems, updateItem, deleteItem}