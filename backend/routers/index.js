import express from "express";



const router = express.Router();

router.get('/',(req,res)=>{
    res.json({msg : 'goodbye world'})
});
router.post('/login',(req,res)=>{
    res.json({msg: 'blm bisa dipakai'})
});
router.post('/register',(req,res)=>{
    res.json({msg:"sama aja belum bisa dipakai"})
});
router.delete('/logout',(req,res)=>{
    res.json({msg: "sama boss gak bisa dipakai"})
});

export default router;