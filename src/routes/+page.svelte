<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	let progressBar: HTMLElement;

	onMount(() => {
		const handleScroll = () => {
			let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled = (winScroll / height) * 100;
			if (progressBar) {
				progressBar.style.width = scrolled + '%';
			}
		};

		window.addEventListener('scroll', handleScroll);
		
		const anchors = document.querySelectorAll('a[href^="#"]');
		const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			if (targetId) {
				document.querySelector(targetId)?.scrollIntoView({
					behavior: 'smooth'
				});
			}
		};

		anchors.forEach(anchor => {
			anchor.addEventListener('click', handleAnchorClick as EventListener);
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
			anchors.forEach(anchor => {
				anchor.removeEventListener('click', handleAnchorClick as EventListener);
			});
		};
	});
</script>

<svelte:head>
	<title>이시윤 | Writer.</title>
</svelte:head>

<!-- Reading Progress Bar -->
<div bind:this={progressBar} class="reading-progress" id="progress-bar"></div>

<!-- Navigation Shell (TopAppBar) -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-surface-bright/90 backdrop-blur-md border-t-2 border-primary">
	<div class="font-display-md text-display-md font-semibold text-on-surface">Writer.</div>
	<nav class="hidden md:flex gap-lg items-center">
		<a class="font-body-strong text-body-strong text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" href="#pen">The Pen</a>
		<a class="font-body-strong text-body-strong text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" href="#machine">The Machine</a>
		<a class="font-body-strong text-body-strong text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" href="#platform">The Platform</a>
	</nav>
	<div class="flex items-center gap-md">
		<span class="material-symbols-outlined text-primary cursor-pointer active:scale-95 transition-transform">search</span>
		<span class="material-symbols-outlined text-on-surface cursor-pointer md:hidden active:scale-95 transition-transform">menu</span>
	</div>
</header>

<!-- Main Canvas -->
<main class="w-full">
	<!-- Hero Section -->
	<section class="min-h-[795px] flex flex-col items-center justify-center bg-canvas-light px-lg py-hero-v">
		<div class="max-w-measure text-center">
			<span class="font-eyebrow text-eyebrow text-primary uppercase mb-md block">Author Identity</span>
			<h1 class="font-display-lg text-display-lg text-on-surface mb-lg">
				“저는 제 글을 끝까지 읽히고 싶어서 여기까지 왔습니다.”
			</h1>
			<div class="w-16 h-[1px] bg-primary mx-auto opacity-30"></div>
		</div>
	</section>

	<!-- 01 PEN Section -->
	<section class="bg-surface-bright py-section-v border-t border-hairline" id="pen">
		<div class="max-w-content-max mx-auto px-lg">
			<div class="mb-section-v text-center">
				<span class="font-eyebrow text-eyebrow text-on-surface-variant mb-sm block">01 / THE PEN</span>
				<h2 class="font-display-lg text-display-lg italic text-on-surface max-w-measure mx-auto leading-relaxed">
					“켈베로스의 죽음은 결코 끝이 아니라, 세 개의 문이 동시에 닫히는 소리에 불과했다.”
				</h2>
			</div>

			<!-- Work List -->
			<div class="max-w-measure mx-auto">
				<div class="flex justify-between items-end py-md border-t border-hairline group cursor-pointer hover:bg-surface-container-low transition-colors px-xs active:scale-[0.98] transition-transform">
					<span class="font-display-md text-display-md text-on-surface">켈베로스의 죽음</span>
					<span class="font-caption text-caption text-outline mb-2">Long-form Fiction, 2023</span>
				</div>
				<div class="flex justify-between items-end py-md border-t border-hairline group cursor-pointer hover:bg-surface-container-low transition-colors px-xs active:scale-[0.98] transition-transform">
					<span class="font-display-md text-display-md text-on-surface">진혼의 설화</span>
					<span class="font-caption text-caption text-outline mb-2">Short Anthology, 2022</span>
				</div>
				<div class="flex justify-between items-end py-md border-t border-hairline group cursor-pointer hover:bg-surface-container-low transition-colors px-xs active:scale-[0.98] transition-transform">
					<span class="font-display-md text-display-md text-on-surface">파라다이스</span>
					<span class="font-caption text-caption text-outline mb-2">Screenplay, 2021</span>
				</div>
				<div class="border-t border-hairline"></div>
			</div>
		</div>
	</section>

	<!-- Transition Zone: Light to Dark -->
	<div class="h-40 bg-gradient-to-b from-surface-bright to-surface-dark-1"></div>

	<!-- 02 AI/FILM Section -->
	<section class="bg-surface-dark-1 py-section-v text-white overflow-hidden relative" id="machine">
		<div class="max-w-content-max mx-auto px-lg relative z-10">
			<div class="mb-section-v">
				<span class="font-eyebrow text-eyebrow text-outline-variant mb-sm block">02 / THE MACHINE</span>
				<h2 class="font-display-lg text-display-lg text-inverse-on-surface mb-lg">기계의 세계, 확장되는 감각.</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-lg items-center">
				<!-- Exhibit Still -->
				<div class="relative">
					<div class="exhibit-still rounded-lg overflow-hidden aspect-[4/3] relative">
						<img class="w-full h-full object-cover" alt="A cinematic film still" src="/Marginalia_Portfolio.png"/>
						<div class="absolute bottom-md left-md">
							<span class="font-eyebrow text-[10px] text-white/60 bg-black/40 backdrop-blur-md px-xs py-[2px] rounded-full">STILL NO. 04: 내 세계의 한계</span>
						</div>
					</div>
				</div>

				<!-- Terminal Card -->
				<div class="bg-surface-dark-2 p-lg rounded-xl border border-white/5 font-mono">
					<div class="flex gap-xs mb-md">
						<div class="w-3 h-3 rounded-full bg-error/40"></div>
						<div class="w-3 h-3 rounded-full bg-primary/40"></div>
						<div class="w-3 h-3 rounded-full bg-outline/40"></div>
					</div>
					<div class="space-y-sm">
						<div class="flex gap-sm">
							<span class="text-primary-fixed-dim">$</span>
							<span class="text-inverse-on-surface font-eyebrow">process --ai-collaboration</span>
						</div>
						<p class="text-outline-variant font-caption leading-relaxed">
							인간의 서사를 기계의 언어로 번역하는 과정. AI는 단순한 도구가 아닌, 작가의 상상력이 도달하지 못하는 '심연의 시각화'를 돕는 파트너로서 기능합니다.
						</p>
						<div class="pt-md border-t border-white/10">
							<span class="text-secondary-fixed-dim font-eyebrow text-[11px]">STATUS: COMPLETED</span>
							<div class="w-full bg-white/5 h-1 mt-xs rounded-full overflow-hidden">
								<div class="bg-primary h-full w-[88%]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 03 PLATFORM Section -->
	<section class="bg-surface-dark-2 py-section-v border-t border-white/5" id="platform">
		<div class="max-w-content-max mx-auto px-lg">
			<div class="flex flex-col md:flex-row justify-between items-start mb-section-v gap-lg">
				<div class="max-w-measure">
					<span class="font-eyebrow text-eyebrow text-secondary-fixed-dim mb-sm block">03 / THE PLATFORM</span>
					<h2 class="font-display-lg text-display-lg text-white mb-md">Creator's mAIte</h2>
					<p class="font-lead text-lead text-outline-variant">작가와 기계가 공존하는 새로운 창작 생태계를 설계합니다.</p>
				</div>
				<Button class="px-lg py-sm rounded-full font-body-strong active:scale-95 transition-transform">플랫폼 탐색하기</Button>
			</div>

			<!-- Platform Bento Grid -->
			<div class="grid md:grid-cols-3 gap-md">
				<Card.Root class="md:col-span-2 bg-surface-black border-none text-white flex flex-col justify-between min-h-[320px] p-lg">
					<Card.Header class="p-0">
						<div class="font-eyebrow text-primary-fixed-dim mb-lg">$ creators-maite --principle</div>
					</Card.Header>
					<Card.Content class="p-0">
						<Card.Title class="font-display-md text-display-md mb-sm text-white">Ethics of Co-creation</Card.Title>
						<Card.Description class="font-body text-body text-outline-variant">기계는 펜을 들 수 있지만, 이야기의 영혼은 작가에게 귀속되어야 한다는 철학을 고수합니다.</Card.Description>
					</Card.Content>
				</Card.Root>
				<Card.Root class="bg-primary-container border-none p-lg flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary transition-colors">
					<Card.Content class="p-0 flex flex-col items-center justify-center">
						<span class="material-symbols-outlined text-white text-[48px] mb-md">layers</span>
						<span class="font-body-strong text-white text-body-strong">Structure Visualization</span>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="bg-canvas-light py-hero-v">
		<div class="max-w-measure mx-auto px-lg text-center">
			<h2 class="font-display-lg text-display-lg text-on-surface mb-lg">이야기의 다음 장을 함께 쓰시겠습니까?</h2>
			<div class="flex flex-col md:flex-row gap-md justify-center items-center">
				<a class="font-lead text-lead text-primary hover:underline underline-offset-8" href="mailto:contact@leesi-yoon.com">contact@leesi-yoon.com</a>
				<span class="hidden md:inline text-outline-variant">•</span>
				<a class="font-lead text-lead text-on-surface hover:text-primary transition-colors" href="#">Instagram</a>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="w-full py-section-v px-lg flex flex-col items-center gap-md bg-surface-container-highest border-t border-hairline">
	<div class="font-display-md text-display-md font-semibold text-on-surface">Writer.</div>
	<div class="flex gap-lg">
		<a class="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Email</a>
		<a class="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">LinkedIn</a>
		<a class="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">GitHub</a>
	</div>
	<p class="font-caption text-caption text-outline-variant">© 2024 Writer. Crafted for the cinematic eye.</p>
</footer>
