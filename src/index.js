import { AnimationDraw, AnimationExecuter } from "./animation/animation";
import DropEffect from "./effects/drop-effect";
import Parabola from "./effects/parabola";
import Circle from "./shapes/circle";
import { OnMouseTrackerListener } from "./animation/animation-listener";
import ShapeAttribute from "./shapes/shape-attribute";

const canvas = () => {
  let canv = document.getElementById("canvas");
  return canv.getContext("2d");
};

const animation = new AnimationDraw(canvas());
const animationExecuter = new AnimationExecuter(100, animation);
animationExecuter.run(); // 애니메이션 실행

// Create Shape Example
const makeCircleBuilder = (x, y) => {
  const attribute = new ShapeAttribute(); //rainbow
  const effect = new Parabola(0.06, "random"); // gravity 0.06, 방향은 랜덤
  const circle = new Circle(2, x, y, attribute);
  circle.attachEffect(effect);

  return circle;
};

/**
 * OnMouseTrackerListener
 *
 * @param e -> do tracking event name
 * @param observer -> event observer
 * @param tracking -> mouse location tracking (interval)
 * @param shape -> shape builder function
 */

const infinityMouseTracking = new OnMouseTrackerListener(
  "mousemove",
  (x, y, shape) => {
    animationExecuter.add(shape); //애니메이션 updater에 모양 등록
  },
  true,
  makeCircleBuilder
);
