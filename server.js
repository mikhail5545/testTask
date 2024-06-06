import * as http from 'http';
import * as fs from 'fs';
import * as https from 'https';

function convertCertificate (cert) {
    //Certificate must be in this specific format or else the function won't accept it
    var beginCert = "-----BEGIN CERTIFICATE-----";
    var endCert = "-----END CERTIFICATE-----";

    cert = cert.replace("\n", "");
    cert = cert.replace(beginCert, "");
    cert = cert.replace(endCert, "");

    var result = beginCert;
    while (cert.length > 0) {

        if (cert.length > 64) {
            result += "\n" + cert.substring(0, 64);
            cert = cert.substring(64, cert.length);
        }
        else {
            result += "\n" + cert;
            cert = "";
        }
    }

    if (result[result.length ] != "\n")
        result += "\n";
    result += endCert + "\n";
    return result;
}



const port = 443;
const hostname = '37.140.192.188';

const server = https.createServer(options, (request, response) => {
    response.writeHead(200);

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
