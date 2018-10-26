export default class TopicController {
  static get(req, res, cb) {
    res.send({'text': 'This is hell-bot'});
    cb();
  }
}
