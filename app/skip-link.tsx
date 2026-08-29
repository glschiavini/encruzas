'use client';

type SkipLinkProps = {
  targetId: string;
};

export function SkipLink({ targetId }: SkipLinkProps) {
  return (
    <a
      className="skip-link"
      href={`#${targetId}`}
      onClick={(event) => {
        const target = document.getElementById(targetId);

        if (!target) return;

        event.preventDefault();
        target.focus();
        target.scrollIntoView({ block: 'start' });
        window.history.replaceState(null, '', `#${targetId}`);
      }}
    >
      Pular para o conteúdo principal
    </a>
  );
}
