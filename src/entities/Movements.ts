import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { MovementStatus } from "../enums/MovementStatus"
import { Branch } from "./Branch"
import { Product } from "./Product"
import { Driver } from "./Driver"

@Entity("movements")
export class Movement {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Branch, (branch) => branch.movements)
    @JoinColumn({ name: "destination_branch_id"})
    destinationBranch: Branch

    @ManyToOne(() => Product, (product) => product.movements)
    @JoinColumn({ name: "product_id" })
    product: Product

    @ManyToOne(() => Driver, (driver) => driver.movements, {
        onDelete: 'SET NULL',
        nullable: true
    })
    @JoinColumn({ name: "driver_id" })
    driver?: Driver

    @Column({ type: "int", nullable: false })
    quantity: number

    @Column({ type: "enum", enum: MovementStatus, default: MovementStatus.PENDING })
    status: MovementStatus

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date
}