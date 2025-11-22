import { FadeIn } from './components/effects/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <FadeIn>
        <h1 className="font-matrix text-5xl text-matrix-light">Olá, Neo.</h1>
      </FadeIn>

      <FadeIn
        className='mt-4'
      >
        <p>
          Este é um parágrafo normal na fonte Fira Code.
        </p>
      </FadeIn>
      <FadeIn>
        <h2 className='font-matrix text-3xl text-matrix'>
          Seção 2 (Depois do Scroll)
        </h2>
      </FadeIn>
    </div>
  );
}
