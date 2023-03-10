const features = [
	{
		id: "1",
		description: "Asistencia personalizada en cualquiera de tus destinos favoritos.",
		src: "/src/images/cuarto.png",
	},
	{
		id: "2",
		description: "Protección a mascotas.",
		src: "/src/images/gato-espacial.png",
	},
	{
		id: "3",
		description: "Cobertura COVID-19.",
		src: "/src/images/casillero.png",
	},
];

export default function Nosotros() {
	return (
		<div className="z-[-1] relative md:pt-20 bg-image" id="Nosotros">
			<dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8 md:mt-28 lg:mx-28 pb-10 lg:py-24 px-4 sm:px-6 lg:px-8">
				{features.map((feature) => (
					<div key={feature.id} className="relative">
						<img src={feature.src} className="rounded"/>
						<dd className="absolute bottom-10 p-3 lg:text-2xl w-full text-zinc-900 bold bg-[#cbd5e1a6]">
							<span className="mx-auto w-fit block">{feature.description}</span>
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
