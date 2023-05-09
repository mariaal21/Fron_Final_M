import { FetchTodas } from "../src/utils/api"; 

describe('FetchTodas function', () => {


  test('deberia de traerme la data de la api en json ', async () => {
    const data = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue(data) };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    global.fetch = mockFetch;

    const url = 'http://localhost:4500/api/routes';
    const result = await FetchTodas(url);

    expect(mockFetch).toHaveBeenCalledWith(url, {
      method: 'get',
      mode: 'cors',
      cache: 'force-cache'
    });
    expect(mockResponse.json).toHaveBeenCalled();
    expect(result).toEqual(data);
  });

  

  test('si el fetch no funciona que me retorne un error', async () => {
    const error = new Error('Failed to fetch data');
    const mockFetch = jest.fn().mockRejectedValue(error);
    global.fetch = mockFetch;

    const url = 'https://api.example.com/data';
    await expect(FetchTodas(url)).rejects.toThrow('Error al cargar');
  });
});
