(module
  (func $fizzbuzz (param $n i32) (result i32)

    (local $of_3 i32) (local $of_5 i32) (local $of_15 i32)
  
    (local.set $of_3 (call $is_multiple (local.get $n) (i32.const 3)))
    (local.set $of_5 (call $is_multiple (local.get $n) (i32.const 5)))

    (if (i32.and (local.get $of_5) (local.get $of_3))
      (return (i32.const -3))
    )

    (call $is_multiple (local.get $n) (i32.const 5))
    (if (then (return (i32.const -2))))

    (call $is_multiple (local.get $n) (i32.const 3))
    (if (then (return (i32.const -1))))

    (return (local.get $n))
  )

  (func $is_multiple (param $n i32) (param $d i32) (result i32)
    local.get $n 
    local.get $d

    i32.rem_u

    i32.eqz
  )

  (export "fizzbuzz" (func $fizzbuzz))
)