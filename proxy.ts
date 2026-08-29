import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// O apex é o host canônico (ver `metadataBase` em app/layout.tsx). Os dois
// hostnames apontam para este mesmo Worker via Custom Domain, então o redirect
// mora aqui: as Redirect Rules da zona exigiriam permissão de escrita que o
// token do `wrangler login` não possui.
const CANONICAL_HOST = 'encruzas.com.br';

export function proxy(request: NextRequest) {
  const url = new URL(request.url);

  if (url.hostname !== `www.${CANONICAL_HOST}`) {
    return NextResponse.next();
  }

  url.hostname = CANONICAL_HOST;

  return NextResponse.redirect(url, 301);
}

export const config = {
  // Exclui os assets estáticos: eles já são servidos no host canônico e não
  // precisam pagar o custo de passar pelo proxy.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
