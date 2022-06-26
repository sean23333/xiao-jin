import{outside} from "SNAKE 2.0/snake.js";
import fc from "fast-check"

describe("test the function of snake", () => {
    it("sanke position in grid", () => {
        fc.assert(
            fc.property(
                fc.record({x: fc.integer(1,51),y: fc.integer(1,31)}),
                (position) => {
                    if (!outside(position)){
                        return true
                    } else {
                        return false
                }
            }
        )
    );
});
        fc.assert(
            fc.property(
                fc.record({x: fc.integer(31,51),y: fc.integer(31,51)}),
                (position) => {
                    if (!outside(position)){
                        return true
                    } else {
                        return false
                }
            }
        )
    );
});