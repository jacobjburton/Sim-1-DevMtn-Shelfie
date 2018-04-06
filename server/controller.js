module.exports =
{
    getAll: (req, res, next) =>
    {
        const dbInstance = req.app.get('db');
        console.log("WORKING");
        
        dbInstance.get_products()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send());
    },
    create: (req, res, next) =>
    {
        console.log(req.body);
        const dbInstance = req.app.get('db');
        const { name, price, img } = req.body;

        dbInstance.create_product([ name, price, img ])
        .then(()=> res.status(200).send()).catch(() => res.status(500).send());
    }
}