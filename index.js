const str= "<p> Эта строчка должна быть без тегов</p>";




function deleteTags(str) {

    if ((str===null) || (str===''))
        return false;
   
    return str.replace(/<\/?[^>]+(>|$)/g, "");
};

console.log(deleteTags(str));