let rp = require('request-promise');
let cheerio = require('cheerio');


rp('https://trangvangvietnam.com/srch/vi%E1%BB%87t_nam/d%E1%BB%8Bch_v%E1%BB%A5.html')
    .then(function (res) {
        const $ = cheerio.load(res);
        let companynames = [];
        $('h2.company_name a').each(
            (i, elm) => {
                companynames.push(elm.children[0].data);

            }
        );
        console.log(companynames);
    })
    .catch(function (err) {
        console.log(err);
    });