function createSprite(selector){
	let currentFrame = 1;
	return {
		nextFrame: () => {
			if (currentFrame > 9) return; 
			$(selector).attr("class", `sprite frame${currentFrame}`);
			currentFrame++;
		}
	}
}