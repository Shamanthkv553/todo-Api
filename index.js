const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

var notes=[{
        title:"groceries list",
        content:`milk,
                tea powder`
    }]

app.get('/',function(req,res){
    res.send(notes);
})

app.post('/',function(req,res){
    const title=req.body.title;
    const content=req.body.contents;

    notes.push({"title":title,"content":content});
    res.send(notes);

    
})
app.put('/',function(req,res){
    const id=req.query.id;
    const qtitle=req.query.title;
    if(id>=0 && id<notes.length)
    {
    notes[id].title=qtitle;
    res.send(notes);
    }
    else
    res.send("id invalid");
    
})
app.delete('/',function(req,res){
    const qtitle=req.query.title;
   notes= notes.filter((data)=>{
        return data.title!=qtitle;
    })
    res.send(notes);
})

app.listen(3000,()=>{
    console.log(`server is running in port ${port}`);
})
