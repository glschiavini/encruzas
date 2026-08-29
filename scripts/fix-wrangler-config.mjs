// Ajusta o wrangler.json gerado pelo build antes do deploy.
//
// 1. Wrangler 4.127+ rejeita `legacy_env`, mas o build ainda o emite. Remover o
//    campo é um no-op para o deploy: `legacy_env = true` era o padrão antigo e
//    corresponde ao comportamento atual.
// 2. A conta tem dois Workers e só `encruzas` detém o Custom Domain
//    encruzas.com.br. Publicar em qualquer outro nome sobe um Worker que
//    ninguém acessa, sem erro aparente — daí a asserção explícita.
import { readFileSync, writeFileSync } from 'node:fs';

const CONFIG_PATH = 'dist/server/wrangler.json';
const EXPECTED_NAME = 'encruzas';

const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));

if (config.name !== EXPECTED_NAME) {
  throw new Error(
    `Worker alvo é "${config.name}", esperado "${EXPECTED_NAME}". `
      + 'Deploy abortado: publicaria num Worker sem o domínio.',
  );
}

if ('legacy_env' in config) {
  delete config.legacy_env;
  writeFileSync(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`);
}
