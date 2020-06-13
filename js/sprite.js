function createSprite(selector){
	const initialFrame = 1;
	
	let lastFrame = 9;
	let currentFrame = initialFrame;
	const updateFrame = (frame) => $(selector).attr("class", `sprite frame${frame}`);

	return {
		nextFrame: () => {
			if (currentFrame > lastFrame) return; 
			updateFrame(++currentFrame);
		},
		reset: () => {
			currentFrame = initialFrame;
			updateFrame(currentFrame);
		},
		isFinished: () => currentFrame >= lastFrame
	}
}