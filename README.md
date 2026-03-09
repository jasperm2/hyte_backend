# Backend 

Backend käyttää REST API palvelinta. Palvelin käynnistyy src/index.js tiedostosta.
Käyttäjähallintaan kuuluu rekisteröinti ja kirjautuminen. Rekisteröinnin endpoint on POST /api/users ja kirjautumisen on /api/users/login, joka palauttaa tokenin ja se tallennetaan localStoragee frontendissä.
Kirjautunut käyttäjä haetaan GET /api/users/me ja se vaatii Bearer tokenin. Tätä mm. käytän navbarissa kun siinä on kirjautuneen käyttäjän nimi.
JWT autetikointi (middlewares/authentication.js) tiedostossa tarkastetaan header ja jos token on validi, req.user sisältää käyttäjän tiedot.
logger.js tulostaa kaikki HTTP pyynnöt konsoleen, error-handlers.js käsittelee validointi- ja palvelinvirheet.
Tietokantahyhteys tulee src/utils/database.js ja malli: <img width="838" height="481" alt="image" src="https://github.com/user-attachments/assets/cbcc6ed9-484b-4d7b-b40c-09b8c8108c5f" /> tämä tietokanta käytössä, mutta omaisuuksia käytössä on vain taulut Users ja DiaryEntries




