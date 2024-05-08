import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Учебное портфолио
				</p>
			</div>

		 	<div className="mt-10 sm:mt-16">

				<div class="bg-white py-6 sm:py-8 lg:py-12">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">

						<div class="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
							<div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
								<a className="text-5xl lg:text-6xl font-extrabold dark:text-white"
								   href="https://disk.yandex.ru/d/6r3F4Orp2pvErA">Программирование</a>
							</div>

							<div
								className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
								<a className="text-5xl lg:text-6xl font-extrabold dark:text-white"
								   href="https://disk.yandex.ru/d/6r3F4Orp2pvErA">Серверные веб-технологии</a>
							</div>

							<div
								className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
								<a className="text-5xl lg:text-6xl font-extrabold dark:text-white"
								   href="https://disk.yandex.ru/d/6r3F4Orp2pvErA">Компьюетрный практикум</a>
							</div>

							<div
								className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
								<a className="text-5xl lg:text-6xl font-extrabold dark:text-white"
								   href="https://disk.yandex.ru/d/6r3F4Orp2pvErA">Прикладные информационные технологии</a>
							</div>

							<div
								className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
								<a className="text-5xl lg:text-6xl font-extrabold dark:text-white"
								   href="https://disk.yandex.ru/d/6r3F4Orp2pvErA">Сети и телекоммуникации</a>
							</div>

							<div
								className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
								<a className="text-5xl lg:text-6xl font-extrabold dark:text-white"
								   href="https://disk.yandex.ru/d/6r3F4Orp2pvErA">Базы данных</a>
							</div>
						</div>
					</div>
				</div>

		 	</div>
		</section>


	);
};

export default ProjectsGrid;
