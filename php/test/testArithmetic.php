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

    public function testMultiply() {
        $this->assertEquals(24, $this->object->multiply(8, 3));
    }

    public function testDivide() {
        $this->assertEquals(3, $this->object->divide(6, 2));
    }
}
