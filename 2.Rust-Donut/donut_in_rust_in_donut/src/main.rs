use std::io::{stdout, Write};
fn main(){
let mut a:f32=0.0;
let mut b:f32=0.0;
let mut z_arr=[0.0f32;1760]; 
let mut b_arr=[b' ';1760];
print!("\x1b[2J");
loop {b_arr.fill(b' ');
z_arr.fill(0.0);
for j_step in 0..90{
let j=j_step as f32*0.07;
for i_step in 0..314 { 
let i=i_step as f32*0.02;
let c=i.sin();
let d=j.cos();
let e=a.sin();
let f=j.sin();
let g=a.cos();
let h=d+2.0;
let p=1.0/(c*h*e+f*g+5.0);
let l=i.cos();
let m=b.cos();
let n=b.sin();
let t=c*h*g-f*e;
let x=(40.0+30.0*p*(l*h*m-t*n))as i32;
let y=(12.0+15.0*p*(l*h*n+t*m))as i32;
let o=x+80*y;
let q=(8.0*((f*e-c*d*g)*m-c*d*e-f*g-l*d*n))as i32;
if y>0&&y<22&&x>0&&x<80&&p>z_arr[o as usize]{
z_arr[o as usize]=p;
let idx=if q>0{q}else{0}as usize;
b_arr[o as usize] = b" .,-~:;=!*#$@"[idx];}}}
print!("\x1b[H");
for k in 0..1760{
if k%80==0{
print!("\n");
}else{
print!("{}",b_arr[k]as char);}}
stdout().flush().unwrap();
a+=0.01;
b+=0.005;}}

