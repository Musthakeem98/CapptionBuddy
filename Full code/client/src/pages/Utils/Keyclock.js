// src/keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://localhost:8085/auth',
    realm: 'Capption_buddy',
    clientId: 'capption_buddy',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;