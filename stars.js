var topBuffer = { top: window.innerHeight*-1, bottom: 0 };
var bottomBuffer = { top: window.innerHeight, bottom: window.innerHeight*2 };

class CanvasManager {
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------

    // Utility Functinos
    calculateTotalDots() {
        this.totalDots = ((window.innerWidth * window.innerHeight) / (100 * 100)) * this.density;
        return 
    }
    randomSize() {
        return this.minDotSize + (Math.random() * (this.maxDotSize - this.minDotSize));
    }
    randomWidth() {
        return Math.floor(Math.random() * (window.innerWidth - 0));
    }
    randomHeight() {
        return Math.floor(Math.random() * (bottomBuffer.bottom - topBuffer.top));
    }
    drawBufferRectangles() {
        this.ctx.globalAlpha = 0.1;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, topBuffer.top, window.innerWidth, topBuffer.bottom - topBuffer.top);
        this.ctx.fillRect(0, bottomBuffer.top, window.innerWidth, bottomBuffer.bottom - bottomBuffer.top);
        this.ctx.globalAlpha = 1.0;
    }

    // Initiation Functions
    initialize(color) {
        this.drawBufferRectangles();
        this.calculateTotalDots();
        this.lastScrollY = window.scrollY; // Store the initial scroll position
        for (let i = 0; i < this.totalDots; i++) {
            const s = this.randomSize();
            const x = this.randomWidth();
            const y = this.randomHeight();
    
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x, y, s, s);
            this.dots.push({ x, y, size: s });
        }
    }
    constructor(canvasId, density, minDotSize, maxDotSize, scrollSpeed, color) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.initialDensity  = density;
        this.density = density;
        this.totalDots
        this.minDotSize = minDotSize;
        this.maxDotSize = maxDotSize;
        this.scrollSpeed = scrollSpeed;
        this.dots = [];

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        function changeSize () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;

            topBuffer = { top: window.innerHeight*-1, bottom: 0 };
            bottomBuffer = { top: window.innerHeight, bottom: window.innerHeight*2 };

            this.handleStarScroll(color);
            this.drawBufferRectangles(color);
        }
        window.addEventListener('resize', changeSize.bind(this));

        this.initialize(color);
    }

    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------

    // Scroll Functions
    topBuffer() {
        return Math.floor(Math.random() * (topBuffer.bottom - topBuffer.top) + topBuffer.top);
    }
    bottomBuffer() {
        return Math.floor(Math.random() * (bottomBuffer.bottom - bottomBuffer.top) + bottomBuffer.top);
    }

    drawDotAtBottom(color) {
        const s = this.randomSize();
        const x = this.randomWidth();
        const y = this.bottomBuffer();

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, s, s);
        this.dots.push({ x, y, size: s });
    }
    drawDotAtTop(color) {
        const s = this.randomSize();
        const x = this.randomWidth()
        const y = this.topBuffer()

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, s, s);
        this.dots.push({ x, y, size: s });
    }
    handleStarScroll(color) {
        const currentScrollY = window.scrollY;
        const scrollAmount = (currentScrollY - this.lastScrollY) * this.scrollSpeed;
        this.lastScrollY = currentScrollY;
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.drawBufferRectangles();

        for (let i = this.dots.length - 1; i >= 0; i--) {
            const dot = this.dots[i];
            dot.y -= scrollAmount;

            if (dot.y + dot.size < topBuffer.top) {
                this.dots.splice(i, 1);
                this.drawDotAtBottom(color);
                continue;
            } else if (dot.y > bottomBuffer.bottom) {
                this.dots.splice(i, 1);
                this.drawDotAtTop(color);
                continue;
            }
            this.ctx.fillRect(dot.x, dot.y, dot.size, dot.size);
        }
    }
}
// canvasId, density, minDotSize, maxDotSize, scrollSpeed
const canvas1 = new CanvasManager('stars', 0.1, 1, 1, 0);
const canvas2 = new CanvasManager('stars2', 0.5, 1, 1, 0.00001);
const canvas3 = new CanvasManager('stars3', 1, 1, 1, 0.0001);
const canvas4 = new CanvasManager('stars4', 1.5, 1, 1, 0.0005);
const canvas5 = new CanvasManager('stars5', 1.75, 1, 1, 0.001);
const canvas6 = new CanvasManager('stars6', 1, 1, 1.25, 0.05);
const canvas7 = new CanvasManager('stars7', 0.75, 0.75, 1.75, 0.01);
const canvas8 = new CanvasManager('stars8', 0.5, 1.5, 2, 0.3);
const canvas9 = new CanvasManager('stars9', 0.25, 1.5, 2, 0.6);
const canvas10 = new CanvasManager('stars10', 0.1, 2, 3, 0.01);

document.addEventListener('scroll', () => {
    canvas1.handleStarScroll();
    canvas2.handleStarScroll();
    canvas3.handleStarScroll();
    canvas4.handleStarScroll();
    canvas5.handleStarScroll();
    canvas6.handleStarScroll();
    canvas7.handleStarScroll();
    canvas8.handleStarScroll();
    canvas9.handleStarScroll();
    canvas10.handleStarScroll();
}, { passive: false });