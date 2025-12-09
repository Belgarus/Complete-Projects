fn main() {
    let mut a: f32 = 0.0;
    let mut b: f32 = 0.0;

    let mut z_arr: [f32; 1760] = [0.0; 1760]; 
    let mut b_arr: [u8; 1760] = [0; 1760]; 

    println!("\x1b[2J");

    loop {
        b_arr.fill(b' ');
        z_arr.fill(0.0);

        for j in (0..90).map(|j_step| j_step as f32 * 0.07) { //for (j = 0; j < 6.28; j += 0.07)
            for i in (0..314).map(|i_step| i_step as f32 * 0.02) {

                let c = i.sin();
                let d = j.cos();
                let e = a.sin();
                let f = j.sin();
                let g = a.cos();

                let h = d + 2.0;
                let d_bl = 1.0 / (c * h * e + f * g + 5.0);

                let l = i.cos();
                let m = b.cos();
                let n = b.sin();

                let t = c * h * g - f * e;
                let x: u32 = (40.0 + 30.0 * d_bl * (1.0 * h * m - t * n)) as u32;
                let y: u32 = (12.0 + 15.0 * d_bl * (1.0 * h * n + t * m)) as u32;
                let o_obs: u32 = x + 80 * y;
                let o = o_obs as usize;

                let n_bl: u32 = (8.0 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n)) as u32;
                
                if 22 > y && y > 0 && x > 0 && 80 > x && d_bl > z_arr[o] {
                    z_arr[o] = d_bl;
                    b_arr[o] = ".,-~:;=!*#$@".as_bytes()[(if n_bl > 0 { n_bl } else { 0 }) as usize];
                }
            }
            println!("\x1b[H");
            for k in 0..1760 {
                if k % 80 == 0 {
                    println!();
                } else {
                    print!("{}", b_arr[k] as char);
                }
            }
            a += 0.001;
            b += 0.0005;
        }
    }
    //return 0;
}
