import { createId } from "@paralleldrive/cuid2"

export default {
    ce_prefix: createId(),
    identifier: 'ch.kaifa.listenbrainz',
    name: 'ListenBrainz',
    description: 'Plugin to submit listening data to ListenBrainz.',
    version: '1.1.0',
    author: 'mar0xy',
    repo: 'https://github.com/KAIFA-CH/cider-listenbrainz',
    entry: {
        'plugin.js': {
            type: 'main',
        }
    }
}