class Monster {
    let name: String
    var level: Int
    
    init(name: String, level: Int = 1) {
        self.name = name
        self.level = level
    }
    
    func attackMonster(enemy: Monster) {
        print("\(self.name)は\(enemy.name)を攻撃した。");
    }
}

class Slime: Monster {
    override func attackMonster(enemy: Monster) {
        print("\(self.name)は\(enemy.name)をおちょくった。");
    }
}

let monster = Monster(name: "モンスター", level: 3)
let slime = Slime(name: "スライムB", level: 2)
monster.attackMonster(enemy: slime)
slime.attackMonster(enemy: monster)
slime.super.attackMonster(enemy: monster)
