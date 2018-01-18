module Mod
  def hello
    puts 'Hello'
  end

  module_function :hello
end

Mod.hello
