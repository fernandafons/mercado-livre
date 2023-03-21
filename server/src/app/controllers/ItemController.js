import api from '../services/axios';

class ItemController {
  async listItems(req, res){
    try {
      const query = req.query.q;
      const response = await api.get(`/sites/MLA/search?q=${query}`);

      // console.log(response.data);

      const data = response.data.results.map(item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          price: item.price,
          amount: Math.trunc(item.price),
          decimals: Number((item.price - Math.trunc(item.price)).toFixed(2))
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state_name: item.address.state_name
      }))

      return res.status(200).json(data)
    } catch (error) {
      console.log(error);
    }
  }

  async detailItems(req, res){
    console.log('entrou no detailitems server!!!!!!!!!1');
    try {
      const id = req.params.id;
      const details = await api.get(`/items/${id}`);
      const description = await api.get(`/items/${id}/description`);
      // console.log('description.data', description.data);

      const data = {
        item:{
          id: id,
          title: details.data.title,
          price: details.data.price
        },
        picture: details.data.thumbnail,
        condition: details.data.condition,
        free_shipping: details.data.shipping.free_shipping,
        sold_quantity: details.data.sold_quantity,
        description: description.data.plain_text
      };

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ItemController();