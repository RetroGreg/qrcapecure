// Informations de base pour le consommateur
const consumerInfo = {
    espece: "Thon rouge",
    lieuPeche: "Atlantique Nord",
    datePeche: "15 octobre 2024",
    methodePeche: "Pêche durable",
    certification: "MSC",
    qualite: "Frais",
    conservation: "Entre 0-4°C",
    dlc: "20 octobre 2024",
    lienImagePoisson: "path/to/photo-thon.jpg",
    lienLogoCertification: "path/to/logo-certification.png"
};

// Encodage des données JSON en URL pour le QR code consommateur
const consumerInfoEncoded = encodeURIComponent(JSON.stringify(consumerInfo));
const consumerUrl = `https://retrogreg.github.io/qrcapecure/client.html?data=${consumerInfoEncoded}`;
const qrConsumer = new QRious({
    element: document.getElementById('qr-consommateur'),
    value: consumerUrl,
    size: 200,
});

// Informations détaillées pour l’entreprise
const companyDetails = {
    espece: "Thon rouge",
    numeroLot: "20241015-AB12",
    dateHeureCapture: "2024-10-15T08:30:00Z",
    coordonneesGPS: { lat: 45.678, lon: -23.456 },
    lieuPeche: "Atlantique Nord",
    fournisseur: "Navire Océan II - Compagnie Maritime XYZ",
    methodePeche: "Pêche durable",
    certification: "MSC",
    qualite: {
        frais: true,
        tests: {
            ph: 6.5,
            temperatureTraitement: "2°C"
        }
    },
    conservation: {
        temperature: "0-4°C",
        dureeTransport: "48 heures",
    },
    methodeTransformation: "Congélation à bord",
    conditionnement: {
        type: "Boîte recyclable",
        poids: "500g"
    },
    dlc: "2024-10-20",
    lienImagePoisson: "path/to/photo-thon.jpg",
    lienLogoCertification: "path/to/logo-certification.png"
};

// Encodage des données JSON en URL pour le QR code entreprise
const companyDetailsEncoded = encodeURIComponent(JSON.stringify(companyDetails));
const companyUrl = `https://retrogreg.github.io/qrcapecure/entreprise.html?data=${companyDetailsEncoded}`;
const qrCompany = new QRious({
    element: document.getElementById('qr-entreprise'),
    value: companyUrl,
    size: 220,
});
