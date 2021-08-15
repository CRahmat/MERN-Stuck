exports.createContent = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    /*const image = req.body.image;*/

    const result = {
        message: 'Create Content Successfully',
        data:{
                id: 1,
                title: title,
                content: content, 
                created_at:'15/08/2021 - 00.00', 
                author: {
                    uid: 1,
                    fullName: "Catur Rahmat"
                }
        }
    }
    res.status(201).json(result);
}

exports.detailsContent = (req, res, next) => {
    res.json(
        {
            message: 'Get Content Successfully',
            data:{
                    id: 1,
                    title:'Title Blog', 
                    author:'Catur Rahmat', 
                    date:'15 Agustus 2021', 
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        }
    );
    next();
}