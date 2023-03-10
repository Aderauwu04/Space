import { experiencias } from "../constantes/constantes";

export default function Experiencias() {
	return (
		<div className="flex flex-col pt-20 bg-galaxy" id="Experiencias">
			<h3 className="text-center font-bold tracking-tight text-zinc-300 text-3xl text-5xl md:text-8xl lg:text-[9.25rem]">
				Experiencias
			</h3>
			<p className="text-2xl bold text-center text-zinc-300 mt-4 md:mt-4 lg:my-10 xl:mt-16">Conoce la opinión de nuestros viajeros</p>
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 lg:max-w-7xl xl:grid-cols-2 py-24 px-4 pt-1 sm:px-6 lg:px-8">
				<div className="md:w-[50vw] lg:w-auto mx-auto">
					<img className="w-full rounded-3xl" src="/src/images/astronauta.png" />
				</div>
				<div>
					<dl className="xl:mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{experiencias.map((experiencia) => (
							<div key={experiencia.id} className=" bg-[#6259618c] rounded border-y border-gray-200 p-4 h-fit">
								<dd className="mt-2 text-sm text-zinc-300 bold">{experiencia.description}</dd>
								<dd className="text-right mt-4 font-bold">- {experiencia.autor}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
