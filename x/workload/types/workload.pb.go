// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: enreach/workload/workload.proto

package types

import (
	fmt "fmt"
	io "io"
	math "math"
	math_bits "math/bits"

	proto "github.com/cosmos/gogoproto/proto"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Workload struct {
	Id        uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Epoch     uint64 `protobuf:"varint,2,opt,name=epoch,proto3" json:"epoch,omitempty"`
	MinerId   string `protobuf:"bytes,3,opt,name=minerId,proto3" json:"minerId,omitempty"`
	Score     uint64 `protobuf:"varint,4,opt,name=score,proto3" json:"score,omitempty"`
	ManagerId string `protobuf:"bytes,5,opt,name=managerId,proto3" json:"managerId,omitempty"`
	Creator   string `protobuf:"bytes,6,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Workload) Reset()         { *m = Workload{} }
func (m *Workload) String() string { return proto.CompactTextString(m) }
func (*Workload) ProtoMessage()    {}
func (*Workload) Descriptor() ([]byte, []int) {
	return fileDescriptor_f62260080c3c5bbe, []int{0}
}
func (m *Workload) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Workload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Workload.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Workload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Workload.Merge(m, src)
}
func (m *Workload) XXX_Size() int {
	return m.Size()
}
func (m *Workload) XXX_DiscardUnknown() {
	xxx_messageInfo_Workload.DiscardUnknown(m)
}

var xxx_messageInfo_Workload proto.InternalMessageInfo

func (m *Workload) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Workload) GetEpoch() uint64 {
	if m != nil {
		return m.Epoch
	}
	return 0
}

func (m *Workload) GetMinerId() string {
	if m != nil {
		return m.MinerId
	}
	return ""
}

func (m *Workload) GetScore() uint64 {
	if m != nil {
		return m.Score
	}
	return 0
}

func (m *Workload) GetManagerId() string {
	if m != nil {
		return m.ManagerId
	}
	return ""
}

func (m *Workload) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Workload)(nil), "enreach.workload.Workload")
}

func init() { proto.RegisterFile("enreach/workload/workload.proto", fileDescriptor_f62260080c3c5bbe) }

var fileDescriptor_f62260080c3c5bbe = []byte{
	// 204 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0xcd, 0x2b, 0x4a,
	0x4d, 0x4c, 0xce, 0xd0, 0x2f, 0xcf, 0x2f, 0xca, 0xce, 0xc9, 0x4f, 0x4c, 0x81, 0x33, 0xf4, 0x0a,
	0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0x04, 0xa0, 0x0a, 0xf4, 0x60, 0xe2, 0x4a, 0x33, 0x18, 0xb9, 0x38,
	0xc2, 0xa1, 0x1c, 0x21, 0x3e, 0x2e, 0xa6, 0xcc, 0x14, 0x09, 0x46, 0x05, 0x46, 0x0d, 0x96, 0x20,
	0xa6, 0xcc, 0x14, 0x21, 0x11, 0x2e, 0xd6, 0xd4, 0x82, 0xfc, 0xe4, 0x0c, 0x09, 0x26, 0xb0, 0x10,
	0x84, 0x23, 0x24, 0xc1, 0xc5, 0x9e, 0x9b, 0x99, 0x97, 0x5a, 0xe4, 0x99, 0x22, 0xc1, 0xac, 0xc0,
	0xa8, 0xc1, 0x19, 0x04, 0xe3, 0x82, 0xd4, 0x17, 0x27, 0xe7, 0x17, 0xa5, 0x4a, 0xb0, 0x40, 0xd4,
	0x83, 0x39, 0x42, 0x32, 0x5c, 0x9c, 0xb9, 0x89, 0x79, 0x89, 0xe9, 0x60, 0x1d, 0xac, 0x60, 0x1d,
	0x08, 0x01, 0x90, 0x69, 0xc9, 0x45, 0xa9, 0x89, 0x25, 0xf9, 0x45, 0x12, 0x6c, 0x10, 0xd3, 0xa0,
	0x5c, 0x27, 0xa3, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71,
	0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0x92, 0x80, 0xf9,
	0xb3, 0x02, 0xe1, 0xd3, 0x92, 0xca, 0x82, 0xd4, 0xe2, 0x24, 0x36, 0xb0, 0x3f, 0x8d, 0x01, 0x01,
	0x00, 0x00, 0xff, 0xff, 0xda, 0x3e, 0x75, 0x66, 0x0a, 0x01, 0x00, 0x00,
}

func (m *Workload) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Workload) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Workload) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintWorkload(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.ManagerId) > 0 {
		i -= len(m.ManagerId)
		copy(dAtA[i:], m.ManagerId)
		i = encodeVarintWorkload(dAtA, i, uint64(len(m.ManagerId)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Score != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Score))
		i--
		dAtA[i] = 0x20
	}
	if len(m.MinerId) > 0 {
		i -= len(m.MinerId)
		copy(dAtA[i:], m.MinerId)
		i = encodeVarintWorkload(dAtA, i, uint64(len(m.MinerId)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Epoch != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Epoch))
		i--
		dAtA[i] = 0x10
	}
	if m.Id != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintWorkload(dAtA []byte, offset int, v uint64) int {
	offset -= sovWorkload(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Workload) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovWorkload(uint64(m.Id))
	}
	if m.Epoch != 0 {
		n += 1 + sovWorkload(uint64(m.Epoch))
	}
	l = len(m.MinerId)
	if l > 0 {
		n += 1 + l + sovWorkload(uint64(l))
	}
	if m.Score != 0 {
		n += 1 + sovWorkload(uint64(m.Score))
	}
	l = len(m.ManagerId)
	if l > 0 {
		n += 1 + l + sovWorkload(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovWorkload(uint64(l))
	}
	return n
}

func sovWorkload(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozWorkload(x uint64) (n int) {
	return sovWorkload(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Workload) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowWorkload
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Workload: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Workload: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Epoch", wireType)
			}
			m.Epoch = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Epoch |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MinerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWorkload
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWorkload
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MinerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Score", wireType)
			}
			m.Score = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Score |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ManagerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWorkload
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWorkload
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ManagerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWorkload
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWorkload
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipWorkload(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthWorkload
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipWorkload(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowWorkload
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthWorkload
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupWorkload
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthWorkload
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthWorkload        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowWorkload          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupWorkload = fmt.Errorf("proto: unexpected end of group")
)