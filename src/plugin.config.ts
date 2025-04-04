import { createId } from "@paralleldrive/cuid2"

export default {
    ce_prefix: createId(),
    identifier: 'xyz.thrzl.listenbrainz',
    name: 'ListenBrainz Enhanced',
    description: 'Plugin to submit listening data to ListenBrainz.',
    version: '0.1.0',
    author: 'thrzl',
    repo: 'https://github.com/thrzl/cider-listenbrainz',
    entry: {
        'plugin.js': {
            type: 'main',
        }
    }
}