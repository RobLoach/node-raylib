const assert = require('assert')

describe('raylib', function() {
    let r

    before(async () => {
        r = await require('..')()
    })

    describe('.IsWindowReady()', function() {
        it('should return false', function() {
            assert.strictEqual(r.IsWindowReady(), false)
        })
    })

    describe('.CheckCollisionCircleRec()', function() {
        it('should pass Rectangle and Vector2 objects correctly', function() {
            const center = {x: 10, y: 10}
            const radius = 5
            const rect = {x: 300, y: 300, width: 10, height: 10}
            let collision = r.CheckCollisionCircleRec(center, radius, rect)
            assert.strictEqual(collision, false)

            rect.x = 1
            rect.y = 3
            collision = r.CheckCollisionCircleRec(center, radius, rect)
            assert.strictEqual(collision, true)
        })
    })
})
