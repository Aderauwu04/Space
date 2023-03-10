const features = [
	{
		id: "1",
		description:
			"Muy agradecido con esta agencia, es la segunda vez que compro un boleto y me han tratado súper bien, han sido súper atentos y pacientes, muy buena atención por parte de la asesora Jessica velazques, que con su profesionalismo y buena personalidad me ayudo con todo el proceso, tanto el año pasado como este presente año. Muchas gracias",
		autor: "Jovani Vasque"
	},
	{
		id: "2",
		description:
			"Excelente atención y orientación. Es mi segunda experiencia con ustedes y estoy muy satisfecha. Muchas gracias!!!",
		autor: "Jose Gonzalez"
	},
	{
		id: "3",
		description:
			"Nuestra experiencia fue altamente satisfactoria pues de forma muy eficiente se hizo consulta vídeo conferencia para asistir al asegurado y las indicaciones correspondientes llegaron inmediatamente.",
		autor: "Camila Colmenares"
	},
	{
		id: "4",
		description:
			"Excelente servicio, cumplió con mis requerimientos al 100% destacando la disposición a entregar una buena experiencia al cliente, mis felicitaciones a la empresa y al ejecutivo por su atención.",
		autor: "Davefer Paez"
	},
];

export default function Experiencias() {
	return (
		<div className="flex flex-col pt-20 bg-galaxy" id="Experiencias">
			<h3 className="text-center font-bold tracking-tight text-zinc-900 text-3xl text-5xl md:text-8xl lg:text-[9.25rem]">
				Experiencias
			</h3>
			<p className="text-2xl bold text-center text-zinc-900 mt-4 md:mt-4 lg:mt-16">Conoce la opinión de nuestros viajeros</p>
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 lg:max-w-7xl lg:grid-cols-2 py-24 px-4 pt-1 sm:px-6 lg:px-8">
				<div className=" w-">
					<img className="w-full rounded-3xl" src="/src/images/astronauta.png" />
				</div>
				<div>
					<dl className="lg:mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div key={feature.id} className=" bg-[#6259618c] rounded border-y border-gray-200 p-4 h-fit">
								<dd className="mt-2 text-sm text-zinc-900 bold">{feature.description}</dd>
								<dd className="text-right mt-4">- {feature.autor}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
