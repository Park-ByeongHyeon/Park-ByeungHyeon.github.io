import React from "react";

function article_1() {
	return {
		date: "2023.03 - 2023.06",
		title: "캡스톤 프로젝트",
		description:
			"'얼굴 인식 기술을 이용한 신원 확인 시스템 설계' 논문으로 한국정보기술학회 대학생 논문경진대회 동상 수상. ",
		keywords: [
			"Face-Recognition",
			"Park Byeung Hyeon",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2024.02 - 2024.08",
		title: "KT AIVLESCHOOL AI 트랙",
		description:
			"KDT 부트캠프 KT AIVLESCHOOL AI 트랙을 수료하며 데이터, AI, 머신러닝, 딥러닝, 클라우드, 벡엔드 등에 대해 학습하고, 빅프로젝트에서 긴급 신고 자동 접수 시스템 프로젝트 수행",
		style: ``,
		keywords: [
			"AI",
			"Machine Learning",
			"Deep Learning",
			"Project",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}
function article_3() {
	return {
		date: "2025.03 - 2025.05",
		title: "휴먼교육센터 부트캠프 심화 과정",
		description:
			"휴먼교육센터 (심화_심층데이터 분석을 통한 서비스 솔루션 개발자 과정) 을 수료하며 Google Cloud Platform을 이용한 클라우드 개발, Tableau를 활용한 데이터 분석 등을 학습하고, 'Smart WMS (물류 창고 자동화 시스템)' 프로젝트 수행.",
		style: ``,
		keywords: [
			"GCP",
			"Springboot",
			"Flask",
			"Linux",
			"Full-stack",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 3</h1>
			</React.Fragment>
		),
	};
}
const myArticles = [article_1, article_2, article_3];

export default myArticles;
