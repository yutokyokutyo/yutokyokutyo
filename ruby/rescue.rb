class ExceptionTest
  def test
    begin
      1/0
    rescue ZeroDivisionError => ex
      puts "ZeroDivisionError"
    end
  end
end

obj = EceptionTest.new
obj.test
