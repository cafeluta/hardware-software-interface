; SPDX-License-Identifier: BSD-3-Clause

%include "../utils/printf32.asm"

%define ARRAY_SIZE    10

section .data
    dword_array dd 1392, -12544, -7992, -6992, 7202, 27187, 28789, -17897, 12988, 17992

section .text
extern printf
global main
main:
    mov ecx, ARRAY_SIZE
    xor ebx, ebx  ; pos
    xor edx, edx  ; neg

next_element:
    mov eax, dword[dword_array + exc*4 - 4]
    cmp eax, 0
    jl add_to_neg
    inc ebx
    jmp test_end
add_to_neg:
    inc edx
test_end:
    loop next_element

    PRINTF32 `Num pos is %u, num neg is %u\n\x0`, ebx, edx
    ret
