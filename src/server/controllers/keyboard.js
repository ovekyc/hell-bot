export default class TopicController {
  static get(req, res, cb) {
    res.send({
      type: "buttons",
      buttons: ["Helps"]
    });
    cb();
  }
}
