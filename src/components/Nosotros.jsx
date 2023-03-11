import { nosotros } from "../constantes/constantes";

export default function Nosotros() {
	return (
		<div className="z-[-1] relative md:pt-20 bg-image" id="Nosotros">
			<dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8 md:mt-28 lg:mx-auto md:max-w-[90rem] pb-10 lg:py-24 px-4 sm:px-6 lg:px-8">
				{nosotros.map((dato) => (
					<div key={dato.id} className="relative">
						<img src={dato.src} className="rounded"/>
						<dd className="absolute bottom-10 p-3 lg:text-2xl w-full text-zinc-900 bold bg-[#cbd5e1a6]">
							<span className="mx-auto w-fit block">{dato.description}</span>
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
