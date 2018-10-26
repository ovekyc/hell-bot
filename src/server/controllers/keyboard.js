export default class TopicController {
  static get(req, res, cb) {
    res.send({type: 'text', text: 'This is hell-bot'});
    cb();
  }
}
