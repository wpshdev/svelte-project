export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/properties/';
    const response = await fetch(url, {
        headers: { 'Authorization': 'bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072' },
    });
    return response.json();
}                                                                      