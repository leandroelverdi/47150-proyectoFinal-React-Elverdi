export const About = () => (
  <>
    <h2 className="text-4xl font-semibold uppercase text-center mt-10 mb-20">Sobre nosotros</h2>
    <section className="flex flex-col items-center justify-center h-full mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 w-full max-w-5xl px-2 sm:px-0 text-xl">
        <div className="flex flex-col items-center bg-gray-100 w-full sm:w-4/6 h-full p-5 rounded shadow-xl mb-6 sm:mb-0">
          <h2 className="text-4xl font-semibold uppercase text-center mt-10 mb-20">¿Quienes somos?</h2>
          <p>
            Sneakers es un E-comerse que vende diferentes prendas a todo el publico, contamos con una basta experiencia en el mercado.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 w-full sm:w-4/6 h-full p-6 rounded shadow-xl">
          <h2 className="text-2xl font-bold mb-3">¿Como surguió la idea?</h2>
          <p>
            La idea de nuestro emprendimiento proviene del aumento que esta teniendo todo el mercado online ya que el vender de esta forma facilita al cliente puesto que ya no tiene la necesidad de moverse de su casa para adquirir las prendas que desea.
          </p>
        </div>
      </div>
    </section>
  </>
);
