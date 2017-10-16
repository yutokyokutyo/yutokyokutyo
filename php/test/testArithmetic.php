<?php
require_once 'arithmetic.php';

class ArithmeticTest extends PHPUnit\Framework\TestCase {

    protected $object;

    protected function setup() {
        $this->object = new Arithmetic();
    }

    public function testAdd() {
        $this->assertEquals(8, $this->object->add(3, 5));
    }

    public function testSubtract() {
        $this->assertEquals(7, $this->object->subtract(10, 3));
    }
}
