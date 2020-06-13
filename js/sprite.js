function createSprite(selector){
	const initialFrame = 1; let lastFrame = 9; let currentFrame = initialFrame;
	// Updates the class of the element to display the part of the gallows image based on the number of wrong kicks
	const updateClass = (frame) => $(selector).attr("class", `sprite frame${frame}`);
	// Updates the frame to the position relative to the user's wrong kicks
	const nextFrame = () => currentFrame < lastFrame ? updateClass(++currentFrame) : null;
	// Returns the position of the image to the beginning of the game
	const reset = () => { currentFrame = initialFrame; updateClass(currentFrame); };
	// Checks if the user's kicking attempts are over
	const isFinished = () => currentFrame >= lastFrame;
	// Public API
	return { nextFrame, reset, isFinished }
}