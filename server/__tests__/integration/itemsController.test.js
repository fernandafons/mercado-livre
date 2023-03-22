import ItemController from '../../src/app/controllers/ItemController';
import { mockRequest, mockResponse} from 'jest-mock-req-res';

describe('ItemController', () => {
  it('return correct format', async () => {
    const item = [{"condition": "new", "free_shipping": true, "id": "MLA1281945934", "picture": "http://http2.mlstatic.com/D_861221-MLA52872253714_122022-I.jpg", "price": {"amount": 46399, "currency": "ARS", "decimals": 0, "price": 46399}, "state_name": "Capital Federal", "title": "Telefono Celular Tcl 30+ 128gb 4gb Ram Tech Black"}, {"condition": "new", "free_shipping": true, "id": "MLA1166155217", "picture": "http://http2.mlstatic.com/D_919873-MLA50185644201_062022-I.jpg", "price": {"amount": 39549, "currency": "ARS", "decimals": 0, "price": 39549}, "state_name": "Capital Federal", "title": "Quantum Q20 Dual Sim 128 Gb  Azul 4 Gb Ram"}, {"condition": "new", "free_shipping": true, "id": "MLA1141182930", "picture": "http://http2.mlstatic.com/D_614975-MLA49653661676_042022-I.jpg", "price": {"amount": 149999, "currency": "ARS", "decimals": 0, "price": 149999}, "state_name": "Buenos Aires", "title": "Samsung Galaxy A53 5g 6 Gb 128 Gb Awesome Blue"}, {"condition": "new", "free_shipping": true, "id": "MLA1361698460", "picture": "http://http2.mlstatic.com/D_767116-MLA51542240141_092022-I.jpg", "price": {"amount": 37999, "currency": "ARS", "decimals": 0, "price": 37999}, "state_name": "Buenos Aires", "title": "Tcl 30e 64 Gb  Atlantic Blue 3 Gb Ram"}]
    const req = mockRequest({ query: { q: 'celular'} });
    const res = mockResponse()

    await ItemController.listItems(req, res)
    
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toBeCalledWith(item)
  })
});