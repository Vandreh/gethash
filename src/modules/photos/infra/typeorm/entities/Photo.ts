import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('photos')
class Photo {
    @PrimaryColumn()
    id?: String;
    @Column()
    title: String;
    @Column()
    description: String;
    @Column()
    photo_file: String;
    @Column()
    user_id: String

    constructor() {
        if (!this.id) {
            this.id = uuidV4();       
        }
    }
}

export { Photo };